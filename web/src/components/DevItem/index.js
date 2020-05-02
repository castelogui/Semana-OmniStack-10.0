import React from 'react';
import './styles.css';

function DevItem({dev}){    
    return (
        <li className="dev-item">
            <header>
                <img src={dev.avatar_url} alt={dev.name}/>
                <div className="user-info">
                    <h3>{dev.name}</h3>
                    <strong>{dev.github_username}</strong>
                    <span>{dev.techs.join(', ')}</span>
                </div>
            </header>
            <p>{dev.bio}</p>
            <div class="link">
                <a href={`https://github.com/${dev.github_username}`}>Perfil de {dev.github_username}</a>
            </div>
        </li>
    );
}

export default DevItem;