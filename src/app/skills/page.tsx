'use client'
import { useEffect, useState } from "react";
import { Header } from "@/components";
import { IoChevronForward } from "react-icons/io5";

import { IoLogoJavascript } from "react-icons/io5";

type SkillItemProps = {
    title: string;
    description?: string;
    Icon: any;
}
const SkillItem: React.FC<SkillItemProps> = ({title, description, Icon}) => {
    return (
        <div className="flex gap-4">
            <div>
                {Icon}
            </div>
            <div className="">
                <h3 className="text-md font-medium text-black">{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    )
}

const skillsList = {
    hard: [
        {
            title: 'Javascript',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat hac in arcu elementum lobortis facilisis mauris. Amet pellentesque posuere bibendum tellus metus volutpat arcu nulla praesent. Id iaculis mauris ipsum in at nibh. Elementum ipsum a consequat dolor, elementum lobortis. Ornare aenean euismod mauris amet eget pellentesque dui ornare augue. Sit sagittis ut bibendum neque.',
            Icon: <IoLogoJavascript size={48} color="#000" />
        },
        {
            title: 'Javascript2',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat hac in arcu elementum lobortis facilisis mauris. Amet pellentesque posuere bibendum tellus metus volutpat arcu nulla praesent. Id iaculis mauris ipsum in at nibh. Elementum ipsum a consequat dolor, elementum lobortis. Ornare aenean euismod mauris amet eget pellentesque dui ornare augue. Sit sagittis ut bibendum neque.',
            Icon: <IoLogoJavascript size={48} color="#000" />
        },
        {
            title: 'React2',
            Icon: <IoLogoJavascript size={48} color="#000" />
        }
    ],
    soft: [
        {
            title: 'React',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat hac in arcu elementum lobortis facilisis mauris. Amet pellentesque posuere bibendum tellus metus volutpat arcu nulla praesent. Id iaculis mauris ipsum in at nibh. Elementum ipsum a consequat dolor, elementum lobortis. Ornare aenean euismod mauris amet eget pellentesque dui ornare augue. Sit sagittis ut bibendum neque.',
            Icon: <IoChevronForward size={48} color="#000" />
        }        
    ]
}



export default function Skills() {
    const [selectedSkillType, setSelectedSkillType] = useState<'hard' | 'soft'>('hard')
    const [skills, setSkills] = useState(skillsList['hard'])

    useEffect(() => {
        setSkills([...skillsList[selectedSkillType]])
    },[selectedSkillType])

  return (
    <section className="min-h-screen px-4 sm:px-8 py-4 flex flex-col relative">
        <Header />
        <div id="my-skills" className="mt-16">
            <h1 className="text-2xl font-bold">Minhas skills</h1>
            <ul className="flex gap-8 mt-4">
                <li className="">
                    <button className="flex gap-2 items-center" onClick={() => setSelectedSkillType('hard')}>
                        <div className={`rounded-full p-1 ${selectedSkillType === 'hard' && 'bg-black text-white'}`}>
                            <IoChevronForward />
                        </div>
                        <span>Hard skills</span>
                    </button>
                </li>

                <li className="">
                    <button className="flex gap-2 items-center" onClick={() => setSelectedSkillType('soft')}>
                        <div className={`rounded-full p-1 ${selectedSkillType === 'soft' && 'bg-black text-white'}`}>
                            <IoChevronForward />
                        </div>
                        <span>Soft skills</span>
                    </button>
                </li>
            </ul>
        </div>
        <div className="bg-[rgba(0,0,0,.05)] rounded-xl p-8 mt-8 flex flex-col gap-8">
            {
                skills.length === 0 && (
                    <div className="w-full h-full flex items-center justify-center">
                        <h1>Nenhuma skill cadastrada :(</h1>
                    </div>
                )
            }
            {
                skills.map((skill) => (
                    <SkillItem 
                        key={skill.title}
                        title={skill.title}
                        description={skill.description}
                        Icon={skill.Icon}
                    />
                ))
            }
        </div>
    </section>
  )
}
