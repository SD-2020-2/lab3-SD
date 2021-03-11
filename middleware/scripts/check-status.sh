#!/bin/bash
# Checks the status of a container

echo $(docker ps -f id=$(docker ps --filter "name=instancia" -q) --format "{{.State}}")