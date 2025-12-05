import React from 'react';
import { Zap, Trophy, Flame, Medal, DoorClosed } from 'lucide-react';

async function getBadgeData() {
    try {
        const res = await fetch('https://tryhackme.com/api/v2/badges/public-profile?userPublicId=6328792', {
            next: { revalidate: 3600 }
        });
        const html = await res.text();

        // Extract data using regex
        const avatarMatch = html.match(/thm-avatar[^>]*background-image:\s*url\(([^)]+)\)/);
        const usernameMatch = html.match(/class="user_name">([^<]+)</);
        const rankTitleMatch = html.match(/class="rank-title">([^<]+)</);
        const pointsMatch = html.match(/trophy-icon[\s\S]*?class="details-text">([^<]+)</);
        const streakMatch = html.match(/fire-icon[\s\S]*?class="details-text">([^<]+)</);
        const roomsMatch = html.match(/award-icon[\s\S]*?class="details-text">([^<]+)</);
        const badgesMatch = html.match(/door-closed-icon[\s\S]*?class="details-text">([^<]+)</);

        return {
            avatar: avatarMatch ? avatarMatch[1] : '',
            username: usernameMatch ? usernameMatch[1] : 'User',
            rankTitle: rankTitleMatch ? rankTitleMatch[1] : '',
            points: pointsMatch ? pointsMatch[1] : '0',
            streak: streakMatch ? streakMatch[1] : '0',
            rooms: roomsMatch ? roomsMatch[1] : '0',
            badges: badgesMatch ? badgesMatch[1] : '0',
        };
    } catch (error) {
        console.error('Error fetching badge data:', error);
        return null;
    }
}

export const TryHackMeBadge = async () => {
    const data = await getBadgeData();

    if (!data) return null;

    return (
        <div className="w-full flex justify-center py-4 my-8">
            <div
                className="relative flex items-center gap-3 p-3 rounded-xl select-none cursor-pointer hover:scale-[1.02] transition-transform"
                style={{
                    width: '327px',
                    height: '84px',
                    backgroundImage: "url('https://tryhackme.com/img/thm_public_badge_bg.svg')",
                    backgroundSize: 'cover',
                    transform: 'scale(1.5)',
                    transformOrigin: 'center',
                }}
            >
                <div className="relative w-[60px] h-[60px] rounded-full p-[2px] ml-[10px]" style={{ background: 'linear-gradient(to bottom left, #a3ea2a, #2e4463)' }}>
                    <div
                        className="w-full h-full rounded-full bg-[#121212] bg-cover bg-center bg-no-repeat"
                        style={{ backgroundImage: `url(${data.avatar})` }}
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-1.5">
                        <span className="font-medium text-sm text-[#f9f9fb] truncate max-w-[135px]" style={{ fontFamily: 'Ubuntu, sans-serif' }}>
                            {data.username}
                        </span>
                        <div className="flex items-center gap-1">
                            <Zap size={10} color="#ffbb45" fill="#ffbb45" />
                            <span className="font-medium text-xs text-white" style={{ fontFamily: 'Ubuntu, sans-serif' }}>
                                {data.rankTitle}
                            </span>
                        </div>
                    </div>

                    <div className="flex gap-2">
                        <div className="flex items-center gap-1.5">
                            <Trophy size={11} color="#9ca4b4" />
                            <span className="text-white text-[11px] font-normal" style={{ fontFamily: 'Ubuntu, sans-serif' }}>{data.points}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <Flame size={13} color="#a3ea2a" fill="#a3ea2a" />
                            <span className="text-white text-[11px] font-normal" style={{ fontFamily: 'Ubuntu, sans-serif' }}>{data.streak}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <Medal size={13} color="#d752ff" />
                            <span className="text-white text-[11px] font-normal" style={{ fontFamily: 'Ubuntu, sans-serif' }}>{data.rooms}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <DoorClosed size={12} color="#719cf9" />
                            <span className="text-white text-[11px] font-normal" style={{ fontFamily: 'Ubuntu, sans-serif' }}>{data.badges}</span>
                        </div>
                    </div>

                    <a href="https://tryhackme.com/p/ciberportero" target="_blank" className="text-[#f9f9fb] text-[11px] hover:underline" style={{ fontFamily: 'Ubuntu, sans-serif' }}>
                        tryhackme.com
                    </a>
                </div>
            </div>
        </div>
    );
};
