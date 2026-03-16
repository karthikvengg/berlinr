#!/bin/bash
# Watch the latest GitHub Actions run and send a macOS notification when done.
# Usage: bash scripts/notify-deploy.sh [repo]  (defaults to karthikvengg/berlinr)

REPO="${1:-karthikvengg/berlinr}"

notify() {
  terminal-notifier -title "$1" -message "$2" -sound "Glass" -appIcon "/Applications/Safari.app/Contents/Resources/Safari.icns" 2>/dev/null \
    || osascript -e "display notification \"$2\" with title \"$1\" sound name \"Glass\""
}

# Give GitHub a moment to register the new run
sleep 3

RUN_ID=$(gh run list --repo "$REPO" --limit 1 --json databaseId -q '.[0].databaseId' 2>/dev/null)

if [ -z "$RUN_ID" ]; then
  notify "Berlinr Deploy" "Could not find a workflow run."
  exit 1
fi

TITLE=$(gh run view "$RUN_ID" --repo "$REPO" --json displayTitle -q '.displayTitle' 2>/dev/null)
notify "🚀 Deploy started" "${TITLE:-Deploying…}"

echo "Watching run $RUN_ID..."
gh run watch "$RUN_ID" --repo "$REPO" --exit-status > /dev/null 2>&1
STATUS=$?

if [ $STATUS -eq 0 ]; then
  notify "✅ Deploy succeeded" "${TITLE:-Build finished}"
else
  notify "❌ Deploy failed" "${TITLE:-Build failed — check GitHub Actions}"
fi
