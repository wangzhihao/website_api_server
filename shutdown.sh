#!/bin/sh

ROOT_DIR=$( cd "$( dirname "$0" )" && pwd )

echo shut down the personal website api server.

kill $(cat $ROOT_DIR/logs/site.pid)