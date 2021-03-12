#!/bin/bash

TARGET=$1

GIT_LOG=$(git log -1 --merges --format=%P | sed 's/ /\.\./')
COMMIT=$(git log ${GIT_LOG} --oneline --format=%H ${TARGET})
echo git log is ${GIT_LOG}

echo "git log $COMMIT --oneline"
echo $(git log $COMMIT --oneline)
echo "git log $COMMIT --oneline ${TARGET}"
echo $(git log $COMMIT --oneline ${TARGET})

if [ -z "${COMMIT}" ]; then
    echo cancel circle ci
    circleci-agent step halt
fi
