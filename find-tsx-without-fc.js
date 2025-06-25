import fs from 'fs';
import path from 'path';

function findTsxFiles(dir, tsxFiles = []) {
    const files = fs.readdirSync(dir);
    
    for (const file of files) {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        
        if (stat.isDirectory()) {
            // Skip node_modules and other common directories to ignore
            if (!['node_modules', '.git', 'dist', 'build'].includes(file)) {
                findTsxFiles(filePath, tsxFiles);
            }
        } else if (file.endsWith('.tsx')) {
            tsxFiles.push(filePath);
        }
    }
    
    return tsxFiles;
}

function checkFileForFC(filePath) {
    try {
        const content = fs.readFileSync(filePath, 'utf8');
        return content.includes('FC');
    } catch (error) {
        console.error(`Error reading file ${filePath}:`, error.message);
        return false;
    }
}

function main() {
    const currentDir = process.cwd();
    console.log(`Searching for TSX files in: ${currentDir}`);
    
    // Find all TSX files
    const tsxFiles = findTsxFiles(currentDir);
    console.log(`Found ${tsxFiles.length} TSX files total`);
    
    // Filter files that don't contain 'FC'
    const filesWithoutFC = [];
    
    for (const filePath of tsxFiles) {
        if (!checkFileForFC(filePath)) {
            // Convert to relative path
            const relativePath = path.relative(currentDir, filePath);
            filesWithoutFC.push(relativePath);
        }
    }
    
    console.log('\n=== TSX Files WITHOUT "FC" ===');
    if (filesWithoutFC.length === 0) {
        console.log('No TSX files found without "FC"');
    } else {
        console.log(`Found ${filesWithoutFC.length} TSX files without "FC":\n`);
        filesWithoutFC.forEach(file => {
            console.log(file);
        });
    }
}

// Run the script
main();
