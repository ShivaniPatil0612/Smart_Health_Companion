package com.wellness.util;
import java.util.Random;

public class OtpUtil {

    public static int generateOtp() {
        return 100000 + new Random().nextInt(900000); // 6-digit OTP
    }
}
