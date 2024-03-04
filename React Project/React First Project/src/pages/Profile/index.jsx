import { Container, Form, Avatar } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi'
import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuth } from '../../hooks/auth'
import { api } from "../../services/api";

import avatarPlaceholder from '../../assets/depositphotos_137014128-stock-illustration-user-profile-icon.jpg'


export function Profile(){
    const { user, updateProfile } = useAuth()

    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [oldPassword, setOldPassword] = useState();
    const [newPassword, setNewPassword] = useState();

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

    const [avatar, setAvatar] = useState(avatarUrl)
    const [avatarFile, setAvatarFile] = useState(null)

    async function handleUpdate(){
        const user = {
            name,
            email,
            password: newPassword,
            old_password: oldPassword
        }

        await updateProfile({ user, avatarFile })
    }

    function handleChangeAvatar(event){
        const file = event.target.files[0]
        setAvatarFile(file)

        const imagePreview = URL.createObjectURL(file)
        setAvatar(imagePreview)

    }

return (
    <Container>
        <header>
            <Link to="/">
                <FiArrowLeft/>
            </Link>
        </header>

        <Form>
            <Avatar>
                <img
                src={avatar}
                alt="" />
                <label htmlFor="avatar">
                <FiCamera/>
                <input
                id="avatar"
                type="file"
                onChange={handleChangeAvatar}
                />
                </label>
            </Avatar>
        <Input
        placeholder={user.name}
        type="text"
        icon={FiUser}
        onChange={e => setName(e.target.value)}
        />
        
        <Input
        defaultValue={user.email}
        type="text"
        icon={FiMail}
        onChange={e => setEmail(e.target.value)}
        />

        <Input
        placeholder="Senha"
        type="password"
        icon={FiLock}
        onChange={e => setOldPassword(e.target.value)}
        />

        <Input
        placeholder="Nova senha"
        type="password"
        icon={FiLock}
        onChange={e => setNewPassword(e.target.value)}
        />

        <Button title="Salvar" onClick={handleUpdate}/>

        </Form>
    </Container>
)
}