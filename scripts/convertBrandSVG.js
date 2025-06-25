import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Paths
const SVG_SOURCE_DIR = path.join(__dirname, '../src/Library/Icons/assets/brandSVG');
const OUTPUT_DIR = path.join(__dirname, '../src/Library/Icons/components/BrandIcons');
const TEMPLATE_FILE = path.join(SVG_SOURCE_DIR, 'Template.tsx');

// Helper function to convert filename to PascalCase
function toPascalCase(filename) {
  // Remove .svg extension
  const name = filename.replace('.svg', '');
  
  // Handle camelCase by inserting spaces before uppercase letters
  const spacedName = name.replace(/([a-z])([A-Z])/g, '$1 $2');
  
  // Handle special cases and convert to PascalCase
  return spacedName
    .split(/[-_\s]/)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join('');
}

// Helper function to convert SVG attributes to React-compatible format
function convertSVGAttributes(svgContent) {
  return svgContent
    // Convert hyphenated attributes to camelCase
    .replace(/fill-rule=/g, 'fillRule=')
    .replace(/clip-rule=/g, 'clipRule=')
    .replace(/stroke-width=/g, 'strokeWidth=')
    .replace(/stroke-linecap=/g, 'strokeLinecap=')
    .replace(/stroke-linejoin=/g, 'strokeLinejoin=')
    .replace(/stroke-miterlimit=/g, 'strokeMiterlimit=')
    .replace(/stroke-dasharray=/g, 'strokeDasharray=')
    .replace(/stroke-dashoffset=/g, 'strokeDashoffset=')
    // Remove fixed width and height attributes, keep viewBox
    .replace(/\s+width="[^"]*"/g, '')
    .replace(/\s+height="[^"]*"/g, '');
}

// Helper function to process SVG content
function processSVGContent(svgContent) {
  // Convert attributes to React format
  let processedContent = convertSVGAttributes(svgContent);
  
  // Add props spreading to the svg element
  processedContent = processedContent.replace(
    /<svg([^>]*)>/,
    '<svg$1 {...props}>'
  );
  
  return processedContent;
}

// Main conversion function
function convertSVGToReactComponent(svgFilePath, outputDir) {
  const filename = path.basename(svgFilePath);
  const componentName = toPascalCase(filename);
  const componentNameWithSuffix = `${componentName}SVG`;
  
  console.log(`Converting ${filename} to ${componentName}.tsx (${componentNameWithSuffix})`);
  
  // Read SVG content
  const svgContent = fs.readFileSync(svgFilePath, 'utf8');
  
  // Process SVG content for React
  const processedSVG = processSVGContent(svgContent);
  
  // Create React component content
  const componentContent = `import type { FC, SVGProps } from "react";

export const ${componentNameWithSuffix}: FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    ${processedSVG.split('\n').map(line => line ? `    ${line}` : '').join('\n').trim()}
  );
};
`;

  // Write component file
  const outputFilePath = path.join(outputDir, `${componentName}.tsx`);
  fs.writeFileSync(outputFilePath, componentContent);
  
  return {
    filename: `${componentName}.tsx`,
    componentName: componentNameWithSuffix,
    originalFile: filename
  };
}

// Function to generate index.ts file
function generateIndexFile(components, outputDir) {
  const exports = components
    .map(comp => `export { ${comp.componentName} } from './${comp.filename.replace('.tsx', '')}';`)
    .join('\n');
  
  const indexContent = `// Auto-generated index file for Brand Icons
${exports}
`;

  fs.writeFileSync(path.join(outputDir, 'index.ts'), indexContent);
  console.log('Generated index.ts file');
}

// Main execution
function main() {
  console.log('Starting SVG to React component conversion...');
  
  // Create output directory if it doesn't exist
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    console.log(`Created output directory: ${OUTPUT_DIR}`);
  }
  
  // Read all files in the SVG directory
  const files = fs.readdirSync(SVG_SOURCE_DIR);
  const svgFiles = files.filter(file => 
    file.endsWith('.svg') && 
    file !== 'Template.tsx' &&
    !fs.statSync(path.join(SVG_SOURCE_DIR, file)).isDirectory()
  );
  
  console.log(`Found ${svgFiles.length} SVG files to convert:`);
  svgFiles.forEach(file => console.log(`  - ${file}`));
  console.log('');
  
  // Convert each SVG file
  const convertedComponents = [];
  
  svgFiles.forEach(svgFile => {
    const svgFilePath = path.join(SVG_SOURCE_DIR, svgFile);
    try {
      const result = convertSVGToReactComponent(svgFilePath, OUTPUT_DIR);
      convertedComponents.push(result);
    } catch (error) {
      console.error(`Error converting ${svgFile}:`, error.message);
    }
  });
  
  // Generate index file
  if (convertedComponents.length > 0) {
    generateIndexFile(convertedComponents, OUTPUT_DIR);
  }
  
  console.log(`\nConversion complete! Generated ${convertedComponents.length} React components.`);
  console.log('Components created:');
  convertedComponents.forEach(comp => {
    console.log(`  - ${comp.originalFile} → ${comp.filename} (${comp.componentName})`);
  });
}

// Run the script
main();

export { main, toPascalCase, convertSVGAttributes };
