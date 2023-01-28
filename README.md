# Description

# Getting Started

## Environment Versions

| NAME                     |        VERSION        |
| :----------------------- | :-------------------: |
| Node                     |    `16.14.0 (lts)`    |
| React-Native             |       `0.67.2`        |
| Android minSdkVersion    |         `30`          |
| Android targetSdkVersion |         `30`          |
| JDK                      | `1.8(adoptopenjdk-8)` |
| iOS Deployment Target    |        `11.0`         |

## Install packages

```shell
$ yarn install

$ cd ios && pod install && cd ..
```

## Run project

### Start metro server for development

```shell
$ yarn start
```

### Android

- Build and create APK or AAB file
  ```shell
  $ yarn android:dev-apk
  $ yarn android:pro-apk
  $ yarn android:pro-aab
  ```
- Run on emulator
  ```shell
  $ yarn android:dev
  $ yarn android:pro
  ```
- Run on device
  ```shell
  # Check connected deviceId
  $ adb devices
  # List of devices attached
  # R3CN70VG50B     device

  $ yarn android:dev --deviceId=R3CN70VG50B
  $ yarn android:pro --deviceId=R3CN70VG50B
  ```

### iOS

- Run on simulator
  ```shell
  $ yarn ios:dev
  $ yarn ios:pro
  ```
- Run on device

  > 💡 Make sure ios-deploy was installed: `brew install ios-deploy`

  ```shell
  # Check connected device name
  $ xcrun xctrace list devices
  # === Devices ===
  # Jesse의 iPhone (15.3.1) (00008030-0011690C01A3802E)

  $ yarn ios:dev --device 'Jesse의 iPhone'
  $ yarn ios:pro --device 'Jesse의 iPhone'
  ```

# Configurations

## Native configuration

### Basic

<details>
  <summary>Android</summary>

- Rename package name  
  🔗 [Check out](https://github.com/teamslogup/react-native-boilerplate/commit/2e5855ff4d680226d7092d0221cc679a0addca53)
- <details>
    <summary>Configure build type & product flavor</summary>

  1. Install `react-native-config` and create `.env`, `.env.production` in root project.

     ```shell
     yarn add react-native-config

     cd ios && pod install && cd ..
     ```

  2. Define envConfigFiles in `app/build.gradle`

     ```
     apply plugin: "com.android.application"

     project.ext.envConfigFiles = [
       developmentdebug: ".env",
       developmentrelease: ".env",
       productiondebug: ".env.production",
       proeuctionrelease: ".env.production"
     ]

     apply from: project(':react-native-config').projectDir.getPath() + "/dotenv.gradle"
     ```

  3. Configure whether to bundle JS and assets in debug / release mode
     ```
     project.ext.react = [
       enableHermes: false,
       bundleInDebug: false,
       bundleInRelease: true,
       root: "../../"
     ]
     ```
  4. Modify android.defaultConfig
     ```
     android.defaultConfig = {
       ...
       setProperty("archivesBaseName", "rnboiler-v${versionName}-c${versionCode}")   // Optional
       resValue "string", "build_config_package", "com.slogup.reactnativeboilerplate"
     }
     ```
  5. Define productFlavors & buildTypes and configure each
     ```
     signingConfigs {
       debug { ... }
       release { ... }   // Add release keystore infos..
     }
     flavorDimensions "default"
     productFlavors {
       production {
         manifestPlaceholders = [appName: "RNBP"]
       }
       development {
         manifestPlaceholders = [appName: "[DEV]RNBP"]
         applicationIdSuffix ".debug"
       }
     }
     buildTypes {
       debug { ... }
       release {
         signingConfig signingConfigs.release
         ...
       }
     }
     ```
  6. Edit app name for each flavor in `AndroidManifest.xml`
     ```xml
     <application
       android:label="${appName}"
       ... >
         <activity
           android:name=".MainActivity"
           android:label="${appName}"
           ... >
     ```
  7. Edit scripts in `package.json`
  `json lines "scripts": { "android:dev": "react-native run-android --appIdSuffix=debug --variant=developmentdebug", "android:pro": "react-native run-android --variant=productiondebug", "android:dev-apk": "cd android && ./gradlew assembleDevelopmentRelease && cd .. && echo \"\n\\x1b[1m\\x1b[32mGENERATED AT:\\x1b[0m \\x1b[4m\\x1b[34m$PWD/android/app/build/outputs/apk/development/release\\x1b[0m\"", "android:pro-apk": "cd android && ./gradlew assembleProductionRelease && cd .. && echo \"\n\\x1b[1m\\x1b[32mGENERATED AT:\\x1b[0m \\x1b[4m\\x1b[34m$PWD/android/app/build/outputs/apk/production/release\\x1b[0m\"", "android:pro-aab": "cd android && ./gradlew bundleProductionRelease && cd .. && echo \"\n\\x1b[1m\\x1b[32mGENERATED AT:\\x1b[0m \\x1b[4m\\x1b[34m$PWD/android/app/build/outputs/bundle/productionRelease\\x1b[0m\"", } `
  </details>

- Generate signing key
  - (OPTION 1) Generate with following commands
    ```shell
    keytool -genkeypair -v -storetype PKCS12 -keystore rnboiler.keystore -alias rnboiler -keyalg RSA -keysize 2048 -validity 10000
    ```
  - (OPTION 2) Generate by Android Studio (recommended)  
     `Build` > `Generate Signed Bundle / APK...` > Choose anyone > Click `Create new...` below the `Key store path`
    > 💡 Checkout `keystore password`, `key alias`, `key password` and make sure the keystore file is located at `../android/app/`
- Generate adaptive app icon
  1. Prepare background and foreground resources
  2. Click `New` > `Image Assets` in Android Studio `Project` tool window.
  3. Set icon type as Launcher Icons (Adaptive and Legacy), load each resource in Foreground Layer and Background
     Layer.
  4. Make sure the foreground icon is in the safe area.
  5. Click Next to generate icons.

</details>

<details>
  <summary>iOS</summary>

- Rename iOS bundle identifier
- <details>
    <summary>Configure multiple build scheme</summary>

  1. Change `Bundle display name` in `Info.plist` : ${PRODUCT_NAME}
  2. Create different configurations (`PROJECT` > `Info` > `Configurations`)
     - DevelopmentDebug
     - DevelopmentRelease
     - ProductionDebug
     - ProductionRelease
  3. Change product name & identifier (`TARGETS` > `Build Settings (Basic | Combined) > Packaging`)
     1. Product Bundle Identifier
        - DevelopmentDebug: `com.slogup.ReactNativeBoilerplate.debug`
        - DevelopmentRelease: `com.slogup.ReactNativeBoilerplate.debug`
        - ProductionDebug: `com.slogup.ReactNativeBoilerplate`
        - ProductionRelease: `com.slogup.ReactNativeBoilerplate`
     2. Product Name
        - DevelopmentDebug: `[DEV]RNBP`
        - DevelopmentRelease: `[DEV]RNBP`
        - ProductionDebug: `RNBP`
        - ProductionRelease: `RNBP`
  4. Create different schemes (Exist scheme `ReactNativeBoilerplate` > `Edit Scheme...`)
     1. Duplicate scheme and rename it as `ReactNativeBoilerplateDev`
     2. Select each scheme and edit `Build - Pre-actions` & `Build Configuration`
        1. `ReactNativeBoilerplate`:
           1. Build - Pre-actions > input `echo ".env.production" > /tmp/envfile` into the editor box.
           2. Run > ProductionDebug
           3. Test > ProductionDebug
           4. Profile > ProductionRelease
           5. Analyze > ProductionDebug
           6. Archive > ProductionRelease
        2. `ReactNativeBoilerplateDev`:
           1. Build - Pre-actions > input `echo ".env" > /tmp/envfile` into the editor box.
           2. Run > DevelopmentDebug
           3. Test > DevelopmentDebug
           4. Profile > DevelopmentRelease
           5. Analyze > DevelopmentDebug
           6. Archive > DevelopmentRelease
  5. Update `PodFile`

     ```
     platform :ios, '11.0'

     project 'ReactNativeBoilerplate', {
       'DevelopmentDebug' => :debug,
       'ProductionDebug' => :debug,
       'DevelopmentRelease' => :release,
       'ProductionRelease' => :release
     }

     target 'ReactNativeBoilerplate' do
       config = use_native_modules!
       debugs = ['DevelopmentDebug', 'ProductionDebug']

       ...

       use_flipper!(configurations: debugs)

       ...
     ```

  6. Edit scripts in `package.json`
     ```json lines
     "scripts": {
       "ios:dev": "react-native run-ios --scheme ReactNativeBoilerplateDev --configuration DevelopmentDebug",
       "ios:pro": "react-native run-ios --scheme ReactNativeBoilerplate --configuration ProductionDebug",
     }
     ```

  </details>

- `Signing & Capabilities` > `Signing` > select your team (or personal team) in Xcode  
  🔗 [Check out](https://github.com/teamslogup/react-native-boilerplate/commit/2e5855ff4d680226d7092d0221cc679a0addca53)

</details>

### Code push with App Center

1. Install `appcenter-cli` & sign in

   ```shell
   npm install -g appcenter-cli

   appcenter login
   ```

2. Create apps in app center

   ```shell
   # OS: ["Android", "iOS"]
   # PLATFORM: "React-Native"

   # format:
   # appcenter apps create -d ${APP_NAME}-${OS_SUFFIX} -o ${OS} -p ${PLATFORM}
   appcenter apps create -d react-native-boilerplate-android -o Android -p React-Native
   appcenter apps create -d react-native-boilerplate-ios -o iOS -p React-Native
   ```

3. Issue multiple deployment key

   ```shell
   appcenter codepush deployment add -a jessehj/react-native-boilerplate-android Staging
   appcenter codepush deployment add -a jessehj/react-native-boilerplate-android Production
   appcenter codepush deployment add -a jessehj/react-native-boilerplate-ios Staging
   appcenter codepush deployment add -a jessehj/react-native-boilerplate-ios Production

   # Check key
   appcenter codepush deployment list -a jessehj/react-native-boilerplate-android -k
   appcenter codepush deployment list -a jessehj/react-native-boilerplate-ios -k
   ```

4. Add app center SDK

   ```shell
   yarn add appcenter appcenter-analytics appcenter-crashes

   cd ios && pod install && cd ..
   ```

5. Integrate the SDK

   - Create `android/app/src/main/assets/appcenter-config.json`:
     ```json
     { "app_secret": "${APP_SECRET_KEY}" }
     ```
   - Modify `android/app/src/main/res/values/strings.xml`:
     ```xml
     <string name="appCenterCrashes_whenToSendCrashes" moduleConfig="true" translatable="false">DO_NOT_ASK_JAVASCRIPT</string>
     <string name="appCenterAnalytics_whenToEnableAnalytics" moduleConfig="true" translatable="false">ALWAYS_SEND</string>
     ```
   - Create `ios/AppCenter-Config.plist`:
     > Right-click the project folder in Xcode project navigator and select `New File...`,  
     > Choose `Property List`, save as `AppCenter-Config.plist` where `/ios`
     ```
     <?xml version="1.0" encoding="UTF-8"?>
     <!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "https://www.apple.com/DTDs/PropertyList-1.0.dtd">
     <plist version="1.0">
         <dict>
         <key>AppSecret</key>
         <string>76749fac-363c-4cce-bff8-865f1ff526c0</string>
         </dict>
     </plist>
     ```
   - Modify `AppDelegate.m`

     ```
     #import <AppCenterReactNative.h>
     #import <AppCenterReactNativeAnalytics.h>
     #import <AppCenterReactNativeCrashes.h>

     ...

     - (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
     {
       ...
       [AppCenterReactNative register];
       [AppCenterReactNativeAnalytics registerWithInitiallyEnabled:true];
       [AppCenterReactNativeCrashes registerWithAutomaticProcessing];
       ...
     }
     ```

6. Install `react-native-code-push`

   ```shell
   yarn add react-native-code-push
   cd ios && pod install && cd ..
   ```

   - Modify `settings.gradle`
     ```
     include ':app', ':react-native-code-push'
     project(':react-native-code-push')
     ```
   - Modify `/app/build.gradle`

     ```
     apply from: "../../node_modules/react-native/react.gradle"
     apply from: "../../node_modules/react-native-code-push/android/codepush.gradle"

     ...
     android {
       defaultConfig {
         ...
         resValue "string", "CODE_PUSH_APK_BUILD_TIME", String.format("\"%d\"", System.currentTimeMillis())
       }
       ...
       productFlavors {
         production {
           ...
           resValue "string", "CodePushDeploymentKey", "xxx"
         }
         development {
           ...
           resValue "string", "CodePushDeploymentKey", "xxx"
         }
       ...
     ```

   - Modify `MainApplication.java`

     ```
     import com.microsoft.codepush.react.CodePush;

     public class MainApplication ... {

       private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
         ...
         @Override
         protected String getJSBundleFile() { return CodePush.getJSBundleFile(); }
         ...
     ```

   - Modify `AppDelegate.m`

     ```
     #import <CodePush/CodePush.h>

     ...

     - (NSURL *)sourceURLForBridge:(RCTBridge *)bridge
     {
     #if DEBUG
       return [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index" fallbackResource:nil];
     #else
       return [CodePush bundleURL];
     #endif
     }
     ```

   - Add CodePushDeploymentKey in Info.plist
     1. Define `CODE_PUSH_DEPLOYMENT_KEY` in each build
        configurations (`PROJECT` > `Build Settings > + (Add User-Defined Setting)`)
     2. Add `CodePushDeploymentKey` as a key, `$(CODE_PUSH_DEPLOYMENT_KEY)` as a value in `Info.plist`

7. Wrap root component (ex: `App`) with the CodePush HOC and configure update frequency

   ```typescript
   /* App.tsx */

   import CodePush, { CodePushOptions } from 'react-native-code-push';

   const codePushOptions: CodePushOptions = {
     checkFrequency: CodePush.CheckFrequency.ON_APP_RESUME, // or ON_APP_START, MANUAL
   };

   const App = () => {}; // root component

   export default CodePush(codePushOptions)(App); // CodePush HOC
   ```

8. Releasing updates
   ```shell
   # <ownerName>/<appName> : [react-native-boilerplate-android, react-native-boilerplate-ios]
   # <deployment>: [Staging, Production]
   # <configuration>: iOS configuration name [DevelopmentRelease, ProductionRelease]
   # -m : madatory update
   appcenter codepush release-react -a <ownerName>/<appName> -d <deployment> -c <configuration> -m --description <message>
   ```
   Add script in `pakage.json`
   ```json lines
   "script": {
    "codepush:android:dev": "appcenter codepush release-react -a jessehj/react-native-boilerplate-android -d Staging",
    "codepush:android:pro": "appcenter codepush release-react -a jessehj/react-native-boilerplate-android -d Production",
    "codepush:ios:dev": "appcenter codepush release-react -a jessehj/react-native-boilerplate-ios -d Staging -c DevelopmentRelease",
    "codepush:ios:pro": "appcenter codepush release-react -a jessehj/react-native-boilerplate-ios -d Production -c ProductionRelease",
    "codepush:android:status": "appcenter codepush deployment list -a jessehj/react-native-boilerplate-android",
    "codepush:ios:status": "appcenter codepush deployment list -a jessehj/react-native-boilerplate-ios",
   }
   ```
   ```shell
   yarn codepush:android:dev --description 'Modify layout styles'
   ```

### Firebase

1. Install
   ```shell
   yarn add @react-native-firebase/app
   cd ios && pod install && cd ..
   ```
2. Create new project on [Firebase console](https://console.firebase.google.com/u/0/).

   Create and register apps which android & iOS each platforms on firebase.

   > Create production and development apps for each Android and iOS platform.

   <details>
     <summary>SHA certificate fingerprints (for Android) </summary>

   Using keytool to get the SHA hash of signing certificate

   ```shell
   # keytool -list -v -alias <keyAlias> -keystore <path-to-keystore>

   # for debug
   keytool -list -v -alias androiddebugkey -keystore android/app/debug.keystore
   # Certificate fingerprints:
   # SHA1: 5E:8F:16:06:2E:A3:CD:2C:4A:0D:54:78:76:BA:A6:F3:8C:AB:F6:25
   # SHA256: FA:C6:17:45:DC:09:03:78:6F:B9:ED:E6:2A:96:2B:39:9F:73:48:F0:BB:6F:89:9B:83:32:66:75:91:03:3B:9C

   # for release
   keytool -list -v -alias rnboiler -keystore android/app/rnboiler.keystore
   # Certificate fingerprints:
   # SHA1: **:**:**:**:**:**:**:**:**:**:**:**:**:**:**:**:**:**:**:**
   # SHA256: **:**:**:**:**:**:**:**:**:**:**:**:**:**:**:**:**:**:**:**:**:**:**:**:**:**:**:**:**:**:**:**
   ```

   > Because each Android app has two build types (`debug`, `release`), it should be registered two `SHA1` and two `SHA256`

   </details>

   <details>
     <summary>google-services.json for Android</summary>

   Download `google-services.json` at `/android/app/`. This one file contains information about both android apps.
   </details>

   <details>
     <summary>GoogleService-Info.plist for iOS</summary>

   1. Download two `GoogleService-Info.plist` files, and copy to iOS project:
      - `/ios/ReactNativeBoilerplate/Firebase/Development/GoogleService-Info.plist` (for development)
      - `/ios/ReactNativeBoilerplate/Firebase/Production/GoogleService-Info.plist` (for production)
   2. Right-click the project folder on Xcode and click `Add Files to "ReactNativeBoilerplate"...`
   3. Add `Firebase` folder and make sure the `Add to target` checkbox is NOT checked
   4. Add `New Run Script Phase` on `TARGETS` > `Build Phase`
   `shell case ${CONFIGURATION} in Development*) cp -r "${SRCROOT}/${PROJECT_NAME}/Firebase/Development/GoogleService-Info.plist" "${BUILT_PRODUCTS_DIR}/${PRODUCT_NAME}.app/GoogleService-Info.plist" ;; Production*) cp -r "${SRCROOT}/${PROJECT_NAME}/Firebase/Production/GoogleService-Info.plist" "${BUILT_PRODUCTS_DIR}/${PRODUCT_NAME}.app/GoogleService-Info.plist" ;; *) ;; esac ` > 💡 Rename this script as `Firebase Environment Configurations`  
    This script should be placed above the `Copy Bundle Resources`.
   </details>

3. Initialization
   - Modify `android/build.gradle`

     ```
     dependencies {
       classpath("com.android.tools.build:gradle:4.2.2")
       classpath("com.google.gms:google-services:4.3.10")
     }

     ...
     project.ext {
       set("react-native", [
         versions: [
           // Overriding Library SDK Versions
           firebase: [
             // Override Firebase SDK Version
             bom: "29.0.4"
           ]
         ]
       ])
     }

     ```

   - Modify `android/app/build.gradle`
     ```
     apply plugin: "com.android.application"
     apply plugin: "com.google.gms.google-services"
     ```
   - Modify `ios/Podfile`
     ```
     # Override Firebase SDK Version
     $FirebaseSDKVersion = '8.11.0'
     ```
   - Modify `ios/AppDelegate.m`

     ```
     #import <Firebse.h>

     - (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
     {
     ...
     [FIRApp configure];
     [RNSplashScreen show];
     ...
     ```
4. Crashlytics

   ```shell
   yarn add @react-native-firebase/crashlytics
   cd ios && pod install && cd ..
   ```

   `android/build.gradle`:

   ```
    buildscript {
      dependencies {
        ...
        classpath 'com.google.firebase:firebase-crashlytics-gradle:2.8.1'
      }
    }
   ```

   `android/app/build.gradle`:

   ```
   apply plugin: 'com.google.firebase.crashlytics

   // (Optional) Enable Crashlytics NDK reporting
   android.buildTypes.release {
     ...
     firebaseCrashlytics {
       nativeSymbolUploadEnabled true
       unstrippedNativeLibsDir 'build/intermediates/merged_native_libs/release/out/lib'
     }
   }
   ```

   Create `firebase.json` in rootProject

   ```json
   {
     "react-native": {
       "crashlytics_auto_collection_enabled": true,
       "crashlytics_debug_enabled": false,
       "crashlytics_ndk_enabled": true,
       "crashlytics_is_error_generation_on_js_crash_enabled": true,
       "crashlytics_javascript_exception_handler_chaining_enabled": false
     }
   }
   ```

   Force a crash to test implementation

   ```javascript
   import crashlytics from '@react-native-firebase/crashlytics';

   crashlytics.crash(); // call this to make force crash
   ```

5. Dynamic Links

   ```shell
   yarn add @react-native-firebase/dynamic-links
   cd ios && pod install && cd ..
   ```

   1. Open Dynamic Links menu and Click `Get started` button on Firebase console and create new
      domain: `rnbp.page.link` (Google-provided domain)
   2. Create new dynamic link.
      1. Set up URL prefix
      2. Set up deep link URL & dynamic link name, for example:
         - url: https://slogup.com
         - name: Slogup
      3. Define link behavior for each platform
      4. `Skip the app preview page (not recommended)` -> Check this options to prevent display link button on safari
         ios.
   3. Click `Link details` on the table, check `Long Dynamic Link`
      https://rnbp.page.link/?link=https://slogup.com/&apn=com.slogup.reactnativeboilerplate&isi=1610990723&ibi=com.slogup.reactnativeboilerplate&efr=1

      <table>
        <tr>
          <th>DOMAIN</th>
          <td>https://rnbp.page.link</td>
          <td></td>
        </tr>
        <tr>
          <th>LINK (link=)</th>
          <td>https://slogup.com/</td>
          <td><i>App will be received url. It can be added necessary data in the form of path or query string. ex) https://slogup.com/event?id=12</i></td>
        </tr>
        <tr>
          <th>APN (apn=)</th>
          <td>com.slogup.reactnativeboilerplate</td>
          <td><i>Android package name for open App</i></td>
        </tr>
        <tr>
          <th>(afl=)</th>
          <td>https://slogup.com/</td>
          <td><i>If app is not installed, move to this url instead of going to the google play</i></td>
        </tr>
        <tr>
          <th>ISI (isi=)</th>
          <td>1610990723</td>
          <td><i>iOS app store ID</i></td>
        </tr>
        <tr>
          <th>IBI (ibi=)</th>
          <td>com.slogup.reactnativeboilerplate</td>
          <td><i>iOS bundle identifier</i></td>
        </tr>
        <tr>
          <th>(ifl=)</th>
          <td>https://slogup.com/</td>
          <td><i>If app is not installed, move to this url instead of going to the app store</i></td>
        </tr>
        <tr>
          <th>(efr=)</th>
          <td>1</td>
          <td><i>Skip the app preview page. it also skip confirm action on safari browser. </i></td>
        </tr>
      </table>

   4. <details> <summary>iOS Setup</summary>

      1. Make sure the `App Store ID` & `Team ID` are added in the Firebase iOS apps.
      2. Go to https://rnbp.page.link/apple-app-site-association to test domains.
         ```json
         {
           "applinks": {
             "apps": [],
             "details": [
               {
                 "appID": "8RB2KMFLF7.com.slogup.reactnativeboilerplate",
                 "paths": ["NOT /_/*", "/*"]
               },
               {
                 "appID": "8RB2KMFLF7.com.slogup.reactnativeboilerplate.debug",
                 "paths": ["NOT /_/*", "/*"]
               }
             ]
           }
         }
         ```
      3. `TARGETS` > `Signing & Capabilities` in the XCode, Add `Associated Domains` and input `applinks:rnbp.page.link`
      4. `TARGETS` > `Info` > `URL Types`, Add new items: Identifier as `Bundle ID`, URL Schemes as `$(PRODUCT_BUNDLE_IDENTIFIER)`
      </details>

   5. <details> <summary>Android Setup</summary>

      1. Make sure the `SHA certificate fingerprints` are added in the Firebase Android apps. Download and update `google-services.json`
      2. Go to https://rnbp.page.link/.well-known/assetlinks.json to test domains.
         ```json
         [
           {
             "relation": ["delegate_permission/common.handle_all_urls"],
             "target": {
               "namespace": "android_app",
               "package_name": "com.slogup.reactnativeboilerplate",
               "sha256_cert_fingerprints": ["...", "..."]
             }
           },
           {
             "relation": ["delegate_permission/common.handle_all_urls"],
             "target": {
               "namespace": "android_app",
               "package_name": "com.slogup.reactnativeboilerplate.debug",
               "sha256_cert_fingerprints": [
                 "5B:7D:A9:CA:3B:1C:2B:83:1A:50:76:85:B8:5B:FF:1F:EE:0A:6D:38:0C:1A:92:5B:55:7A:AE:6A:19:DD:0B:81",
                 "FA:C6:17:45:DC:09:03:78:6F:B9:ED:E6:2A:96:2B:39:9F:73:48:F0:BB:6F:89:9B:83:32:66:75:91:03:3B:9C"
               ]
             }
           }
         ]
         ```
      3. </details>

## Configure convention rules

<details>
  <summary>Prettier</summary>

- Install

  ```shell
  $ yarn add --dev --exact prettier
  ```

- Apply Prettier code style rules with `.prettierrc.js`

  > 🔗 [Check out code for detail.](https://gist.github.com/jessehj/7727703cc52645c2c2bead1a246593b5)

- Add prettier scripts in the `pacakge.json`

  ```json
  {
    "scripts": {
      "format": "prettier --write '{**/*,*}.{js,ts,jsx,tsx}'"
    }
  }
  ```

  ```shell
  $ yarn format
  ```

- Configure IDEA settings
  - `Webstorm`
    - Move to `Preferences` > `Languages & Frameworks` > `Javascript` > `Prettier` menu
    - Select prettier package path: `~/{YOUR_PROJECT_PATH}/node_modules/prettier`
    - Enable the options  
      ✅ `On 'Reformat Code' action`  
      ✅ `On Save`
  - `VSCode`
    -

</details>

<details>
  <summary>ESLint</summary>

- Install & Initialize with airbnb style

  ```shell
  # Install
  $ yarn add --dev eslint

  # Initialize
  $ eslint --init

  # You can also run this command directly using 'npm init @eslint/config'.
  # ✔ How would you like to use ESLint? · style
  # ✔ What type of modules does your project use? · esm
  # ✔ Which framework does your project use? · react
  # ✔ Does your project use TypeScript? · Yes
  # ✔ Where does your code run? · browser, node
  # ✔ How would you like to define a style for your project? · guide
  # ✔ Which style guide do you want to follow? · airbnb
  # ✔ What format do you want your config file to be in? · JavaScript

  # Checking peerDependencies of eslint-config-airbnb@latest
  # The config that you've selected requires the following dependencies:

  # eslint-plugin-react@^7.28.0 @typescript-eslint/eslint-plugin@latest eslint-config-airbnb@latest eslint@^7.32.0 || ^8.2.0 eslint-plugin-import@^2.25.3 eslint-plugin-jsx-a11y@^6.5.1 eslint-plugin-react-hooks@^4.3.0 @typescript-eslint/parser@latest
  # ✔ Would you like to install them now with npm? · No
  ```

- Check & install peer dependencies for airbnb style eslint

  ```shell
  # Check peerDependencies
  npm info "eslint-config-airbnb@latest" peerDependencies
  # {
  #   eslint: '^7.32.0 || ^8.2.0',
  #   'eslint-plugin-import': '^2.25.3',
  #   'eslint-plugin-jsx-a11y': '^6.5.1',
  #   'eslint-plugin-react': '^7.28.0',
  #   'eslint-plugin-react-hooks': '^4.3.0'
  # }
  npm info "eslint-config-airbnb-typescript@latest" peerDependencies
  # {
  #   '@typescript-eslint/eslint-plugin': '^5.0.0',
  #   '@typescript-eslint/parser': '^5.0.0'
  # }

  # Install all dependencies
  npx install-peerdeps --dev eslint-config-airbnb
  npx install-peerdeps --dev eslint-config-airbnb-typescript
  ```

- ESLint with prettier

  ```shell
  yarn add --dev eslint-plugin-prettier eslint-config-prettier
  ```

- Edit `tsconfig.json`

  ```json
  {
    "baseUrl": "./",
    "include": [
      "__tests__",
      "src",
      ".eslintrc.js",
      "babel.config.js",
      "index.js",
      "metro.config.js"
    ],
    "exclude": ["node_modules", "jest.config.js"]
  }
  ```

- Apply ESLint rules with `.eslintrc.js`

  > 🔗 [Check out code for detail.](https://gist.github.com/jessehj/2afce92fd1bdee7d1774bfb646a9c931)

- Add ESLint scripts in the `pacakge.json`

  ```json
  {
    "scripts": {
      "lint": "eslint --fix '{**/*,*}.{js,ts,jsx,tsx}'"
    }
  }
  ```

  ```shell
  $ yarn format
  ```

- Configure IDEA settings
  - `Webstorm`
    - Move to `Preferences` > `Languages & Frameworks` > `Javascript` > `Code Quality Tools` > `ESLint` menu
    - Select `Manual ESLint configuration`:
      - ESLint package: `~/{YOUR_PROJECT_PATH}/node_modules/eslint`
      - Configuration file: `~/{YOUR_PROJECT_PATH}/node_modules/.eslintrc.js`
  - `VSCode`
    -

</details>

<details>
  <summary>Git Integration</summary>

- Install husky
  ```shell
  npx husky-init && yarn
  ```
- Install lint-staged
  ```shell
  yarn add --dev lint-staged
  ```
- Define husky git hooks in `package.json`
  ```json
  {
    "scripts": {
      "prepare": "husky install"
    },
    "husky": {
      "hooks": {
        "pre-commit": "lint-staged"
      }
    },
    "lint-staged": {
      "{**/*,*}.{js,ts,jsx,tsx}": ["yarn format", "yarn lint"]
    }
  }
  ```
- Edit `.husky/pre-commit`

  ```shell
  #!/bin/sh
  . "$(dirname "$0")/_/husky.sh"

  yarn lint-staged
  ```

</details>
