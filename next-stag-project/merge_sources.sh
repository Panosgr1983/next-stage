#!/bin/bash

# Τελικός φάκελος ενοποιημένου project
TARGET="./merged_project"
mkdir -p "$TARGET"

# Πάρε όλα τα source αρχεία
find . -type f \( -name "*.js" -o -name "*.ts" -o -name "*.jsx" -o -name "*.tsx" -o -name "*.json" \) | while read -r file; do
    # Πάρε το σχετικό path αφαιρώντας την αρχική './'
    relpath=$(realpath --relative-to=. "$file")
    # Δημιούργησε φακέλους αν δεν υπάρχουν
    mkdir -p "$TARGET/$(dirname "$relpath")"
    # Αν δεν υπάρχει ήδη, κάνε copy
    if [ ! -e "$TARGET/$relpath" ]; then
        cp "$file" "$TARGET/$relpath"
    else
        # Κράτα το πιο πρόσφατο (same filename & relative path)
        if [ "$file" -nt "$TARGET/$relpath" ]; then
            cp "$file" "$TARGET/$relpath"
        fi
    fi
done

echo "✅ Η ενοποίηση με δομή φακέλων ολοκληρώθηκε στο $TARGET"
