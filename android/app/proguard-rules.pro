# React Native
-keep class com.facebook.react.** { *; }
-keep class com.facebook.hermes.** { *; }

# OkHttp
-keepattributes Signature
-keepattributes *Annotation*
-keep class okhttp3.** { *; }
-keep interface okhttp3.** { *; }
-dontwarn okhttp3.**

# Retrofit
-keep class retrofit2.** { *; }
-keepattributes Signature
-keepattributes Exceptions

# Android X
-keep class androidx.** { *; }
-keep interface androidx.** { *; }

# General
-keepattributes SourceFile,LineNumberTable
-keep public class * extends java.lang.Exception
