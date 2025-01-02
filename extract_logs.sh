#!/bin/bash

# Check if input file is provided
if [ $# -ne 1 ]; then
    echo "Usage: $0 <input_file>"
    exit 1
fi

input_file=$1

# Extract version number from input file name
version=$(echo "$input_file" | grep -o '_v[0-9]\+\.log')

# Create output filename with the same version
output_file="extracted${version}"

# Extract all patterns in order using awk
awk '/^>>> Execution returned with :/ ||
     /Closed block/ ||
     /vm_resources: ExecutionResources { n_steps:/ {
        if ($0 ~ /vm_resources: ExecutionResources { n_steps:/) {
            match($0, /vm_resources: ExecutionResources { n_steps:[^,]*/);
            print substr($0, RSTART, RLENGTH);
        } else {
            print $0;
        }
    }' "$input_file" > "$output_file"

echo "Extracted lines have been saved to $output_file"
