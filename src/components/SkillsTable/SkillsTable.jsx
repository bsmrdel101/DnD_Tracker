import React from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import AdjustIcon from '@mui/icons-material/Adjust';

import './SkillsTable.css';

function SkillsTable({ skills, character }) {

    const getModifier = (type, prof) => {
        let baseAbility = getAbilityScore(type);
        let calculatedModifier = Math.floor((baseAbility - 10) / 2);

        if (prof) {
            calculatedModifier += character.prof_bonus;
        }
        return calculatedModifier;
    }

    const getAbilityScore = (type) => {
        switch (type) {
            case 'str':
                return character.str;
            case 'dex':
                return character.dex;
            case 'con':
                return character.con;
            case 'wis':
                return character.wis;
            case 'int':
                return character.int;
            case 'char':
                return character.char;
            default:
                break;
        }
    }

    return (
        <Card sx={{ backgroundColor: 'var(--card)', borderRadius: 4 }}>
            <CardContent>
                <Typography gutterBottom variant="h4" component="div" textAlign="center">
                    Skills
                </Typography>
                <section className='table-container'>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Skill</th>
                                <th>Modifier</th>
                                <th>Prof</th>
                            </tr>
                        </thead>
                        <tbody>
                            {skills.map((skill, i) => {
                                return (
                                    <tr key={i}>
                                        <td>
                                            <Typography gutterBottom variant="p" component="div">
                                                {skill.name} <span className='skill-type'>({skill.type})</span>
                                            </Typography>
                                        </td>
                                        <td>
                                            {getModifier(skill.type, skill.prof) >= 0 && '+'}
                                            {getModifier(skill.type, skill.prof)}
                                        </td>
                                        <td>
                                            {skill.prof &&
                                                <Typography><AdjustIcon sx={{ paddingTop:0.8, fontSize: 14 }} /></Typography>
                                            }
                                        </td>                                      
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </section>                                        
            </CardContent>
        </Card>
    );
}

export default SkillsTable;