import os

# Specify the directory where the files are located
directory = './'

# List all files in the directory
files = os.listdir(directory)

# Iterate through the files and rename them
for filename in files:
    new_filename = filename.lstrip('0')  # Remove todos os zeros à esquerda do nome do arquivo
    os.rename(os.path.join(directory, filename), os.path.join(directory, new_filename))