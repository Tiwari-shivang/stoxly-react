import type React from "react";
import Logo from '../../assets/common/logo.png';
import { Checkbox, Divider, Form, Input } from "antd";
import GoogleIcon from '../../assets/common/google.png'
import AppleIcon from '../../assets/common/apple.png'
import TelegramIcon from '../../assets/common/telegram.png'

export const RegisterPage: React.FC = () => {
    return (
        <section className="flex flex-col items-center">
            <div className="w-[420px] rounded-[20px] border border-1 border-[#4D5063] p-7">
                <section className="flex gap-1 items-center">
                    <img src={Logo} height="40px" width="40px" />
                    <span className="text-[24px] font-semibold text-[#f0b90a]"> STOXLY </span>
                </section>

                <section className="mt-5 ml-1 text-[30px] font-semibold">
                    Welcome to Stoxly
                </section>

                <section className="mt-5 ml-1">
                    <Form
                        layout="vertical"
                    >
                        <Form.Item
                            label={<label className="text-[#fff]">Email/Phone Number</label>}
                            name="email"
                        >
                            <Input className="h-[45px] border-1 border-[#4D5063] bg-transparent" placeholder="Email/Phone (without country code)" />
                        </Form.Item>
                        <Form.Item>
                            <Checkbox className="text-[#fff]">
                                <label>
                                    By creating an account, I agree to Stoxly's <br /> Terms of Service and Privacy Policy.
                                </label>
                            </Checkbox>
                        </Form.Item>
                        <Form.Item>
                            <button className="w-full h-[45px] bg-[#f0b90a] text-black font-semibold rounded-lg">Continue</button>
                        </Form.Item>
                    </Form>
                    <Divider style={{ border: '#4D5063', color: '#4D5063', fontSize: '12px' }}>Or</Divider>

                    <section>
                        <button className="w-full h-[45px] border-1 border-[#4D5063] text-[#fff] text-[14px] rounded-lg relative" style={{ border: '1px solid #4D5063' }}>
                            Continue with Google
                            <img src={GoogleIcon} className="absolute top-[13px] left-4" height="20px" width="20px" />
                        </button>

                        <button className="w-full h-[45px] border-1 border-[#4D5063] text-[#fff] text-[14px] rounded-lg relative mt-3" style={{ border: '1px solid #4D5063' }}>
                            Continue with Apple
                            <img src={AppleIcon} className="absolute top-[13px] left-4" height="18px" width="18px" />
                        </button>

                        <button className="w-full h-[45px] border-1 border-[#4D5063] text-[#fff] text-[14px] rounded-lg relative mt-3 mb-2" style={{ border: '1px solid #4D5063' }}>
                            Continue with Telegram
                            <img src={TelegramIcon} className="absolute top-[13px] left-4" height="20px" width="20px" />
                        </button>
                    </section>
                </section>
            </div>
            <label className="mt-4 text-[14px] cursor-pointer">
                Already have an account ? <span className="text-[#f0b90a] font-semibold">Login</span>
            </label>
        </section>);
}