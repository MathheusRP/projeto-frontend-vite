import { ProfileStyled } from "./styled"

const Profile = ({ display, userData }: any) => {
    return (
        <ProfileStyled className={display}>

            <div className="info">
                <h2>{userData.name}</h2>
                <p><b>E-mail</b> {userData.email}</p>
                <p><b>Telefone:</b> {userData.phone_number}</p>
                <p><b>Admin</b>: {`${userData.is_admin}`}</p>
            </div>
        </ProfileStyled>
    )
}

export default Profile