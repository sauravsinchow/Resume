import { useSelector } from "react-redux";

function OverviewResume(props){

    const introData = useSelector(state => state.intro);

    return (
        <div className="section visible overview">
                        <h1 className="title">Overview</h1>
                        <hr />
                        <div className="content">
                            <p>{introData.desc}</p>
                        </div>
                        <table>
                            <tbody>
                            <tr>
                                <td>
                                    <i className="icon fa-brands fa-whatsapp"></i>
                                    <a  href="https://wa.me/918102070732?text=Hi%20Saurabh" target="_blank">+91 8102070732</a>
                                </td>

                                <td>
                                    <i className="icon fa-regular fa-envelope"></i>
                                    <a href="mailto:saurav123sau123@gmail.com" target="_blank">saurav@gmail.com</a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <i className="icon fa-brands fa-linkedin-in"></i>
                                    <a href="https://www.linkedin.com/in/saurabh-kumar-7b947a156/" target="_blank">saurabh-kumar</a></td>

                                <td>
                                    <i className="icon fa-solid fa-phone"></i>
                                    <a href="tel: 918102070732" target="_blank">Call</a>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
    )
}

export default OverviewResume;