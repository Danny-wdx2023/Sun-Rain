<#
.SYNOPSIS
将当前目录下所有子文件夹中的图片（JPG/JPEG/PNG/GIF）转换为 WebP 格式，保留原图。

.DESCRIPTION
遍历当前目录及其子目录，查找所有图片文件（支持 .jpg/.jpeg/.png/.gif），使用 cwebp 工具转换为 WebP 格式，
转换后的文件与原图同名但扩展名为 .webp（如 1.jpg → 1.webp），原图不会被覆盖。

.REQUIREMENTS
- 已安装 cwebp（Google 官方 WebP 编码器），需确保 cwebp 命令可在 PowerShell 中直接调用（添加到 PATH 或使用完整路径）。
- PowerShell 执行策略允许运行脚本（若提示“无法加载文件”，需以管理员身份运行 Set-ExecutionPolicy RemoteSigned）。
#>

# -------------------------- 配置参数（可根据需求修改） --------------------------
$imageExtensions = @("jpg", "jpeg", "png", "gif")  # 需要转换的图片扩展名（小写）
$webpQuality = 80                                 # WebP 压缩质量（0-100，越高体积越大，画质越好）
$cwebpPath = "cwebp"                              # cwebp 可执行文件路径（若未添加到 PATH，需填写完整路径如 "C:\tools\cwebp.exe"）

# -------------------------- 检查 cwebp 是否可用 --------------------------
if (-not (Get-Command $cwebpPath -ErrorAction SilentlyContinue)) {
    Write-Error "错误：未找到 cwebp 工具！请确认已安装并将路径添加到系统 PATH，或修改脚本中的 \$cwebpPath 参数。"
    exit 1
}

# -------------------------- 遍历所有子目录并转换图片 --------------------------
Write-Host "`n开始转换图片...（当前目录：$(Get-Location)）" -ForegroundColor Cyan

# 获取当前目录下所有子目录（递归）
$folders = Get-ChildItem -Path . -Directory -Recurse

foreach ($folder in $folders) {
    # 获取当前文件夹中的所有图片文件
    $imageFiles = Get-ChildItem -Path $folder.FullName -File | Where-Object {
        $ext = $_.Extension.TrimStart('.').ToLower()
        $imageExtensions -contains $ext
    }

    if ($imageFiles.Count -eq 0) {
        continue  # 无图片文件，跳过当前文件夹
    }

    Write-Host "`n正在处理文件夹：$($folder.FullName)" -ForegroundColor DarkCyan

    foreach ($file in $imageFiles) {
        # 原图路径（如 ./subfolder/1.jpg）
        $originalPath = $file.FullName
        
        # 目标 WebP 路径（如 ./subfolder/1.webp）
        $webpPath = Join-Path -Path $file.DirectoryName -ChildPath ($file.BaseName + ".webp")

        # 执行转换命令
        try {
            & $cwebpPath -q $webpQuality $originalPath -o $webpPath
            if (Test-Path $webpPath) {
                Write-Host "转换成功：$($file.Name) → $webpPath" -ForegroundColor Green
            } else {
                Write-Host "转换失败：$($file.Name)（输出文件未生成）" -ForegroundColor Red
            }
        } catch {
            Write-Host "转换出错：$($file.Name)（错误信息：$($_.Exception.Message)）" -ForegroundColor Red
        }
    }
}

Write-Host "`n转换完成！所有图片已保存为同目录下的 .webp 文件（原图保留）。" -ForegroundColor Cyan