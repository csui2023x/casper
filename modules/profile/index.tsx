import { maskPassword } from "@/lib/utils";
import { getUserWithProfile } from "@/app/actions";

interface ProfileProps {
  params: Promise<{ userId: string }>;
}

export async function Profile({ params }: ProfileProps) {
  const { user, profile } = await getUserWithProfile();

  if (!user || !profile) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-center text-[#700F32] font-poppins font-bold text-lg">
          Profile tidak ditemukan
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="flex flex-col gap-3 mt-7 w-full py-3 px-4 mx-8 md:w-2/3 font-poppins">
        <InputBox
          name="username"
          label="Username / Nama Panggilan"
          text={profile?.username}
        ></InputBox>
        <InputBox
          name="email"
          label="Email"
          text={user.email ?? ""}
          isGray={true}
        ></InputBox>
        <InputBox
          name="Nama Lengkap"
          label="Nama Lengkap"
          text={profile.fullname ?? ""}
        ></InputBox>
        <div className="flex gap-2">
          <InputBox
            name="elemen"
            label="Jenis"
            text={profile.elemen ?? ""}
            size="xs"
          ></InputBox>
          <InputBox
            name="Angkatan"
            label="Angkatan"
            text={profile.angkatan ?? ""}
            size="xs"
          ></InputBox>
        </div>
        <div className="flex gap-2">
          <InputBox
            name="whatsapp"
            label="Whatsapp"
            text={profile.whatsapp_number ?? ""}
            size="xs"
          ></InputBox>
          <InputBox
            name="idLIne"
            label="ID Line"
            text={profile.line_id ?? ""}
            size="xs"
          ></InputBox>
        </div>
      </div>
      {/**
      <Link href={`/profile/edit`}>
        <Button
          className="mt-4 bg-[#F62455] !rounded-xl  shadow-[0_4px_4px_rgba(0,0,0,0.25)] text-poppins text-white !px-4 !py-7 font-bold z-10"
          size={"sm"}
        >
          Edit Profile
        </Button>
      </Link>
      */}
    </>
  );
}

interface LabelProps {
  name: string;
  label: string;
  text: string;
}
function InputLabel({ name, label, text }: LabelProps) {
  return (
    <div id={name}>
      <p className="text-center text-[#700F32]">{label}</p>
      <p className="text-center text-[#340717]">{text}</p>
    </div>
  );
}

interface InputBoxProps {
  name: string;
  label: string;
  text: string;
  isGray?: boolean;
  size?: string;
  isPassword?: boolean;
}

function InputBox({
  name,
  label,
  text,
  isGray = false,
  size = "sm",
  isPassword = false,
}: InputBoxProps) {
  return (
    <div
      id={name}
      className={`flex flex-col gap-1 border rounded-xl border-[#B4B4B4] bg-[#FBFBFB]  py-2 px-4 shadow-bold align-start w-full ${size == "xs" ? "text-xs" : "text-sm"}`}
    >
      <p className={`font-poppins font-bold  text-[#700F32] `}>{label}</p>
      <p className={` text-[#340717] ${isGray ? "opacity-50" : ""}`}>
        {isPassword ? maskPassword(text) : text}
      </p>
    </div>
  );
}
