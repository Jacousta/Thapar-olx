import React, { useState, useEffect } from 'react';
import Input from './Input';
import { useNavigate } from 'react-router-dom';
import Loading from './Loading';

function Signup() {
    const navigate = useNavigate();
    const [user, setUser] = useState({ username: "", password: "", confirm_password: "" });
    const [loading, setLoading] = useState(false);

    const handleInput = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!user.username || !user.password || !user.confirm_password) {
            alert("All fields are required");
            return;
        }

        if (user.password !== user.confirm_password) {
            alert("Passwords do not match");
            return;
        }

        setLoading(true);

        try {
            const response = await fetch("https://thapar-olx-1.onrender.com/api/auth/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username: user.username, password: user.password })
            });

            const data = await response.json();

            if (response.ok) {
                setUser({ username: "", password: "", confirm_password: "" });
                navigate("/home");
            } else if (data === "User already exists") {
                alert("User already exists, redirecting to login page...");
                navigate("/login");
            } else {
                alert(data.message || "Registration failed");
            }
        } catch (error) {
            console.error("Register error:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        // Clean up loading state when the component is unmounted
        return () => setLoading(false);
    }, []);

    return (
        <>
            {loading && <Loading />}
            <form onSubmit={handleSubmit}>
                <div className="container">
                    <label htmlFor="uname"><b>Create Username</b></label>
                    <Input type="text" placeholder="Enter Username" name="username" value={user.username} onChange={handleInput} />

                    <label htmlFor="psw"><b>Create Password</b></label>
                    <Input type="password" placeholder="Enter Password" name="password" value={user.password} onChange={handleInput} />

                    <label htmlFor="psw"><b>Confirm Password</b></label>
                    <Input type="password" placeholder="Enter Password" name="confirm_password" value={user.confirm_password} onChange={handleInput} />

                    <button type="submit" className='login-button'><span>Signup</span></button>

                    <label>
                        <Input type="checkbox" name="remember" /> Remember me
                    </label>
                </div>
            </form>
        </>
    );
}

export default Signup;
