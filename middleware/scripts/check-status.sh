#!/bin/bash
# Checks the status of a container

echo $(docker ps -f id=$(docker container ls --latest --quiet) --format "{{.State}}")