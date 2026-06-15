#!/bin/bash

ROOT_DIR="."
LEVEL=10
SNAP_DIR="structure_snapshots"

mkdir -p "$SNAP_DIR"

echo "Δομή root μέχρι επίπεδο $LEVEL:"
tree -L $LEVEL "$ROOT_DIR" > "$SNAP_DIR/root_structure.txt"
cat "$SNAP_DIR/root_structure.txt"

echo "-----------------------------"
echo "Snapshots ανά σελίδα:"
find "$ROOT_DIR/pages" -maxdepth 1 -type d ! -name "$(basename "$ROOT_DIR/pages")" | while read -r subdir; do
    page=$(basename "$subdir")
    output="$SNAP_DIR/snapshot_$page.txt"
    echo "Σελίδα: $page -> $output"
    tree -L $LEVEL "$subdir" > "$output"
done

echo "Τα snapshot είναι αποθηκευμένα στον φάκελο $SNAP_DIR"
