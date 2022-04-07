import Link from "next/link";
import ActionHeader from "./actionHeader";

export default function Header(){
    return (
        <div className="layout--header">
          <p className="header--text">Welcome to Bubbooks....... Hardwork made easy</p>
          <ActionHeader className={"header--actions"}/>
        </div>
    )
}