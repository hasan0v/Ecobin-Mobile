# ⚠️ Android Emulator Setup Required

## Current Status

Metro bundler is running ✅  
Android project structure is created ✅  
Gradle wrapper is ready ✅  

**BUT:** No Android emulator is running yet ❌

---

## What You Need to Do

### Step 1: Open Android Studio

1. Launch **Android Studio**
2. Click **AVD Manager** (or Tools → Device Manager)

### Step 2: Create or Start a Virtual Device

**If you have NO virtual devices:**
1. Click **Create Virtual Device**
2. Select **Pixel 5** (or any modern phone)
3. Select **API 31** or higher
4. Click **Finish**
5. Virtual device appears in list
6. Click the **Play** (▶️) button to start it

**If you ALREADY have a virtual device:**
1. Find it in the AVD Manager list
2. Click the **Play** (▶️) button to start it
3. Wait for emulator window to open (30-60 seconds)

### Step 3: Verify Emulator is Running

Check device list:
```bash
adb devices
```

You should see something like:
```
List of attached devices
emulator-5554   device
```

---

## Then Build the App

Once your emulator is running:

```bash
npm run android
```

Or directly:
```bash
react-native run-android
```

---

## First Build Timeline

- **Emulator startup:** 30-60 seconds
- **Gradle download:** 2-3 minutes (first time only)
- **App build:** 3-5 minutes (first time only)
- **Installation:** 30 seconds
- **App launch:** 10-15 seconds

**Total first time: 6-10 minutes**

Subsequent builds are **much faster** (1-2 minutes).

---

## Troubleshooting

### Emulator won't start
- Ensure virtualization is enabled in BIOS
- Check if you have enough disk space
- Try a different virtual device

### Build fails with "cannot find symbol"
- Delete `android/build` folder
- Run `npm run android` again

### Port already in use
- Kill Metro: Press Ctrl+C in Terminal 1
- Kill adb: `adb kill-server`
- Start fresh: `npm start` (Terminal 1), then wait 5 sec, then `npm run android` (Terminal 2)

### Java not found
- Set JAVA_HOME environment variable
- Java typically at: `C:\Program Files\Android\Android Studio\jre`

---

## Alternative: Connect Physical Android Device

If you don't want to use an emulator:

1. **Enable USB Debugging:**
   - Settings → Developer Options → USB Debugging (toggle ON)

2. **Connect with USB cable**

3. **Verify connection:**
   ```bash
   adb devices
   ```

4. **Build:**
   ```bash
   npm run android
   ```

---

## Commands Reference

```bash
# List emulators/devices
adb devices

# Start specific emulator (from Android Studio or CLI)
emulator -avd <device_name>

# Kill adb server
adb kill-server

# Reset Metro cache
npm start -- --reset-cache

# Clean build
cd android && gradlew clean && cd ..

# Force rebuild
npm run android -- --rebuild
```

---

## Metro is Still Running!

Terminal 1 has Metro running on port 8081. Keep it open while building.

---

## Next Step

1. **Start your Android emulator or connect device**
2. **Run:** `npm run android`
3. **Wait for app to build and launch**
4. **See the EcoBin splash screen! 🎉**

---

Need help? Check:
- **SETUP.md** - Full environment setup
- **QUICK_START.md** - Quick reference
- **START_HERE.md** - Overview

---

**Your app is ready to run. Just need the emulator! 🚀**
