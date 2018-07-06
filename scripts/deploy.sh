#!/usr/bin/env bash
# Taken from https://github.com/tlvince/validate-commit-msg-bot/blob/master/scripts/deploy.sh
set -euo pipefail


now="npm run -s now -- --token=$NOW_TOKEN"
repo_name="${TRAVIS_REPO_SLUG##*/}"

$now --public
$now alias
$now rm --safe --yes "$repo_name"