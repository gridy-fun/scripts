#!/bin/bash

if [ $# -ne 1 ]; then
    echo "Usage: $0 <input_file>"
    exit 1
fi

input_file=$1
version=$(echo "$input_file" | grep -o '_v[0-9]\+\.log')
output_file="steps${version}"

# Simplified pattern matching
awk -F'n_steps: ' '/vm_resources:/ {
    split($2, arr, " ");
    if (NR > 1) printf ",";
    printf "%s", arr[1];
}' "$input_file" > "$output_file"

echo "Extracted step numbers have been saved to $output_file"
