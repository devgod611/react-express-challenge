/*
 Navicat Premium Data Transfer

 Source Server         : localhost_33067
 Source Server Type    : MySQL
 Source Server Version : 50710
 Source Host           : localhost:33067
 Source Schema         : testho

 Target Server Type    : MySQL
 Target Server Version : 50710
 File Encoding         : 65001

 Date: 15/03/2022 06:06:39
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

CREATE DATABASE IF NOT EXISTS testho;
USE testho;
-- ----------------------------
-- Table structure for user
-- ----------------------------
CREATE TABLE IF NOT EXISTS `user`;  (
  `id` varchar(36) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `email` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `username` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `token_version` int(11) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

SET FOREIGN_KEY_CHECKS = 1;
