import urllib.request
import os
import zipfile
import shutil

# Create gradle wrapper directory
wrapper_dir = r"c:\Users\alien\Desktop\Projects\Ecobin-Mobile\android\gradle\wrapper"
os.makedirs(wrapper_dir, exist_ok=True)

# Download Gradle distribution
gradle_url = "https://services.gradle.org/distributions/gradle-7.6.2-all.zip"
gradle_zip = os.path.join(wrapper_dir, "gradle-7.6.2-all.zip")
gradle_dir = os.path.join(wrapper_dir, "..", "..", "gradle-7.6.2")

print(f"Downloading Gradle from {gradle_url}...")
try:
    urllib.request.urlretrieve(gradle_url, gradle_zip)
    print("✓ Downloaded successfully")
    
    print(f"Extracting to {gradle_dir}...")
    with zipfile.ZipFile(gradle_zip, 'r') as zip_ref:
        zip_ref.extractall(wrapper_dir)
    print("✓ Extracted successfully")
    
    # Find and copy gradle-wrapper.jar
    for root, dirs, files in os.walk(wrapper_dir):
        for file in files:
            if file == "gradle-wrapper.jar":
                src = os.path.join(root, file)
                dst = os.path.join(wrapper_dir, "gradle-wrapper.jar")
                shutil.copy(src, dst)
                print(f"✓ Copied gradle-wrapper.jar to {dst}")
                break
    
    print("\nGradle setup complete!")
    print("Now you can run: npm run android")
    
except Exception as e:
    print(f"✗ Error: {e}")
    print("Please download manually from: https://gradle.org/releases/")
