import React, { useState, useEffect} from 'react'
import { BarChart, Bar, YAxis, XAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { userActivityInformation } from '../../../services/api'
import './Activity.css'

/**
 *  Activity graph component
 * render a <Activity /> component
 * a bar chart for activity
 * @component
 */
export default function Activity() {
    const [activity, setActivity] = useState()

    useEffect(() => {
        userActivityInformation().then(response =>{
            setActivity(response)
        })
    }, [])

    return (
        <React.Fragment>
            <h2 className="activity-bar">Activité quotidienne</h2>
            <ResponsiveContainer width={"100%"} height= {"40%"}>
                <BarChart
                    className="barchart"
                    barSize={8}
                    data={activity}
                    style={{ background:"#FBFBFB", padding:"4em 0 1em 0em", borderRadius:"7px"}}
                    barGap={"10%"}
                >
                    <CartesianGrid vertical={false} strokeDasharray="3 3" />
                    <XAxis tickSize={20} tickLine={false}/>
                    <YAxis
                        dataKey="calories"
                        width={50}
                        tickCount={3}
                        axisLine={false}
                        tickLine={false}
                        orientation="right"
                    />
                    <Tooltip
                        formatter={(value, name, props) => ( [value, name=null, props] )}
                        separator={null}
                        labelStyle={{display:"none"}}
                        itemStyle={{background:"red", color:"white", padding:"1.3em 1em", fontSize:".7em"}}
                        contentStyle={{background:"red", border:0}}
                    />
                    <Bar
                        name="Poids (kg)"
                        legendType="circle"
                        unit="kg"
                        dataKey="kilogram"
                        fill="#282D30"
                        radius={[10,10,0,0]}
                    />
                    <Bar
                        name="Calories brûlées (kCal)"
                        legendType="circle"
                        unit="Kcal"
                        dataKey="calories"
                        fill="#E60000"
                        radius={[10,10,0,0]}
                    />
                    <Legend
                        verticalAlign="top"
                        align="right"
                        wrapperStyle={{top:"1em", right:"0.5em"}}
                        iconSize={10}
                    />
                </BarChart>
            </ResponsiveContainer>
        </React.Fragment>
    )
}
