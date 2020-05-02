import React from 'react';
import './styles.css';
import './repos.css'

function DevItem({dev}){    
    return (
        <li className="dev-item">
            <div className="dev-item">
                <header>
                    <img src={dev.avatar_url} alt={dev.name}/>
                    <div className="user-info">
                        <h3>{dev.name}</h3>
                        <strong>{dev.github_username}</strong>
                        <span>{dev.techs.join(', ')}</span>
                    </div>
                </header>
                <p>{dev.bio}</p>
                <div className="link">
                    <a href={`https://github.com/${dev.github_username}`}>Perfil de {dev.github_username}</a>
                </div>
            </div>
            <div className="repos">
                <strong>{dev.repos}</strong>
            </div>
        </li>
    );
}

export default DevItem;