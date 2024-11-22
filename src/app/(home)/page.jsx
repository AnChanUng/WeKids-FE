"use client";
import { characterInfoMap } from "@/src/constants/common";
import { useAccountInfoStore } from "@/src/stores/accountStore";
import Profile from "@/src/ui/Components/atoms/Profile";
import BlueCardBox from "@/src/ui/Components/home/BlueCardBox";
import { useEffect } from "react";

const childAccounts = [
  {
    id: 1,
    accountNumber: "3333-0073-0030-03",
    balance: 300000,
    name: "강현우",
    state: "active",
    designType: "CHACHAPING",
  },
  {
    id: 2,
    accountNumber: "3333-0073-0030-04",
    balance: 450,
    name: "이준호",
    state: "inactive",
    designType: "GOGOPING",
  },
  {
    id: 3,
    accountNumber: "3333-0073-0030-05",
    balance: 0,
    name: "김민수",
    state: "ACTIVE",
    designType: "HEARTSPRING",
  },
];

export default function MainHome() {
  // 첫 번째 계좌를 초기값으로 설정
  const { selectedAccount, setSelectedAccount } = useAccountInfoStore();

  useEffect(() => {
    setSelectedAccount(childAccounts[0]);
  }, [setSelectedAccount]);

  const handleProfileClick = (accountInfo) => {
    console.log("Clicked account:", accountInfo); // 클릭 시 콘솔에 출력
    setSelectedAccount(accountInfo);
  };

  return (
    <div className={`flex flex-col h-full`}>
      <div className="flex space-x-3 mb-6 ml-8 mt-4">
        {childAccounts.map((account) => (
          <div
            key={account.id}
            className="relative cursor-pointer"
            onClick={() => handleProfileClick(account)}
          >
            <Profile
              accountInfo={account}
              imagePath={characterInfoMap[account.designType].imagePath}
              className="w-10 h-10 relative z-10 ring-1 ring-black/60"
            />
            {selectedAccount?.id !== account.id && (
              <div className="absolute inset-0 bg-black/50 rounded-full pointer-events-none z-20" />
            )}
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <BlueCardBox />
      </div>
      {/* 선택된 계좌 정보 전달 */}
    </div>
  );
}
