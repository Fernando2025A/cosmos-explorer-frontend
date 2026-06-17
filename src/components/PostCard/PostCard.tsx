import React from 'react';
import { Heart, MessageCircle, Share2, Bookmark, MoreHorizontal } from 'lucide-react';

interface PostCardProps {
  avatar: string;
  name: string;
  username: string;
  time: string;
  badge: string;
  content: string;
  image?: string;
  likes: number;
  comments: number;
  shares: number;
}

export const PostCard: React.FC<PostCardProps> = ({
  avatar,
  name,
  username,
  time,
  badge,
  content,
  image,
  likes,
  comments,
  shares
}) => {
  return (
    <article className="explorer-post-card">
      {/* Encabezado del Post */}
      <div className="post-header">
        <div className="post-user-info">
          <img src={avatar} alt={name} className="post-avatar" />
          <div className="post-user-meta">
            <div className="user-name-row">
              <span className="user-display-name">{name}</span>
              <span className="user-handle">{username}</span>
            </div>
            <div className="user-sub-row">
              <span className="post-time">{time}</span>
              <span className={`post-badge ${badge.toLowerCase()}`}>{badge}</span>
            </div>
          </div>
        </div>
        <button className="post-more-btn">
          <MoreHorizontal size={18} />
        </button>
      </div>

      {/* Cuerpo del Post */}
      <div className="post-body">
        <p className="post-text">{content}</p>
        {image && (
          <div className="post-image-container">
            <img src={image} alt="Contenido del post" className="post-content-img" />
          </div>
        )}
      </div>

      {/* Acciones e Interacciones */}
      <div className="post-footer">
        <div className="post-actions-left">
          <button className="post-action-btn action-heart">
            <Heart size={16} />
            <span>{likes}</span>
          </button>
          <button className="post-action-btn">
            <MessageCircle size={16} />
            <span>{comments}</span>
          </button>
          <button className="post-action-btn">
            <Share2 size={16} />
            <span>{shares}</span>
          </button>
        </div>
        <button className="post-action-btn action-bookmark">
          <Bookmark size={16} />
        </button>
      </div>
    </article>
  );
};