import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Password from "@/components/ui/password";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";

const Signup = () => {
  return (
    <div className="w-screen h-screen bg-gradient-to-b from-[#FFFFFF] to-[#AFA3FF] flex items-center justify-center fixed">
      <Card className="w-[648px] h-[556px] rounded-[16px] p-[60px] bg-gradient-to-b from-[#F7F7F7] to-[#F0F0F0]">
        <div className="width-[528px] height-[58px] font-semibold font-Barlow text-[48px] text-center">
          Welcome to <span className="text-[#5539f0]">Workflo</span>!
        </div>
        <div className="w-[528px] h-[290px] flex flex-col gap-[30px] mt-4">
          <Textarea placeholder="Full name" />
          <Textarea placeholder="Your email" />
          <Password />
          <Button className="text-[20px] font-normal text-[#FFFFFF]">
            Sign up
          </Button>
        </div>
        <div className="h-[24px] font-normal text-[20px] text-center text-[#606060] mt-4 ">
          Already have an account?<Link href={"/signin"} className="text-[#0054A1]">Log in</Link>
          .
        </div>
      </Card>
    </div>
  );
};

export default Signup;
