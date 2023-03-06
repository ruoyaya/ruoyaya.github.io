---
title: MD5压缩解压
date: 2023-03-07 00:23:01
categories:
- 代码收藏
- Java
---

## MD5压缩解压

```java
package com.ss.task.scheme.utils;

import org.apache.commons.codec.binary.Base64;

import java.io.*;
import java.util.Map;
import java.util.zip.DeflaterOutputStream;
import java.util.zip.InflaterOutputStream;

/**
 压缩工具
 **/
public class CompressUtils {

    private final static String FLOWVOS_KEY = "flowvos";
    private final static String FLOWIDS_KEY = "flowids";
    private final static String ISCOMPRESSED_KEY = "iscompressed";

    public static void compressFlowVos(Map<String, String> data) {
        compress(data, FLOWVOS_KEY);
    }

    public static void compressFlowIds(Map<String, String> data) {
        compress(data, FLOWIDS_KEY);
    }

    public static void compress(Map<String, String> data, String key) {
        if(data == null || data.get(key) == null) {
            return;
        }
        String flowData = data.get(key);
        flowData = compressData(flowData);

        data.put(key, flowData);
        data.put(ISCOMPRESSED_KEY, "Y");
    }

    /** 压缩字符串 */
    public static String compressData(String data) {
        try {
            if(data == null || data.length() == 0) {
                return data;
            }

            ByteArrayOutputStream bos = new ByteArrayOutputStream();
            DeflaterOutputStream zos = new DeflaterOutputStream(bos);
            zos.write(data.getBytes());
            zos.close();
            return encodeBase64(bos.toByteArray());
        } catch (Exception ex) {
            /* ex.printStackTrace(); */
            return "ZIP_ERR";
        }
    }

    /* 解码字符串 */
    public static String decompressData(String encodeData) {
        try {
            if(encodeData == null || encodeData.length() == 0) {
                return encodeData;
            }

            ByteArrayOutputStream bos = new ByteArrayOutputStream();
            InflaterOutputStream zos = new InflaterOutputStream(bos);
            zos.write(decodeBASE64(encodeData));
            zos.close();
            return bos.toString();
        } catch (Exception ex) {
            /* ex.printStackTrace(); */
            return "UNZIP_ERR";
        }
    }

    public static String encodeBase64(byte [] b) {
        if (b == null) {
            return null;
        }
        return new String((new Base64()).encode(b));
    }

    public static byte[] decodeBASE64(String s) {
        if (s == null) {
            return null;
        }
        return new Base64().decode(s.getBytes());
    }
}

```
