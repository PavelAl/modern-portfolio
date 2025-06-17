$Product = "Portfolio"
$Local = "$PSScriptRoot/../.local"

function Publish-Code {
    Push-Location "${PSScriptRoot}/.."
    
    npm run build
    
    if (-not (Test-Path -Path "$Local/Frontend")) {
        New-Item -Path "$Local/Frontend" -ItemType Directory -Force | Out-Null
    } else {
        Remove-Item -Path "$Local/Frontend/*" -Recurse -Force
    }
    
    Copy-Item -Path "./dist/*" -Destination "$Local/Frontend" -Recurse -Force
    
    Pop-Location
}

function Deploy-Code {
    $bucketName = Get-ExportValue -Name "${Product}FrontendBucketName"

    & aws s3 sync "$Local/Frontend" "s3://$bucketName" --delete
}

function Update-Cache {
    $distributionId = Get-ExportValue -Name "${Product}CloudFrontDistributionId"

    $invalidationId = & aws cloudfront create-invalidation `
        --distribution-id $distributionId `
        --paths '/*' `
        --query Invalidation.Id `
        --output text

    & aws cloudfront wait invalidation-completed `
        --distribution-id $distributionId `
        --id $invalidationId
}

function Get-ExportValue {
    param(
        [string] $name
    )

    & aws @(
        'cloudformation'
        'list-exports'
        '--query'
        "(Exports[?Name=='$name'].Value)"
        '--output'
        'text'
    )
}

Publish-Code
Deploy-Code
Update-Cache
