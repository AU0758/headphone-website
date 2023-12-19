import os

# Get the current directory
current_directory = os.getcwd()

# List all files in the current directory
files = os.listdir(current_directory)

# Remove files that start with "0"
for file in files:
    if not file.startswith('0'):
        os.remove(file)