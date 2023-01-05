import React from 'react'
import styled from 'styled-components'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import StarIcon from '@mui/icons-material/Star';

const Header = () => {
	return (
		<Nav>
			<Logo src = "images/logo.svg">

			</Logo>
			<NavMenu>
				<a>
					<img src='/images/home-icon.svg'/>
					<span>Home</span>
				</a>
				<a>
					<img src='/images/watchlist-icon.svg' />
					<span>watchlist</span>
				</a>
				<a>
					<img src='/images/original-icon.svg'/>
					<span>Orignals</span>
				</a>
				<a>
					<img src='/images/movie-icon.svg'/>
					<span>Movies</span>
				</a>
				<a>
					<img src='/images/series-icon.svg'/>
					<span>Series</span>
				</a>
			</NavMenu>
			<UserImage src='/images/Mohit.jpeg'>

			</UserImage>

		</Nav>
	)
}

export default Header

const Nav = styled.div`
	height: 70px;
	background: #090b13;
	display: flex;
	align-items: center;
	padding: 0 36px;
`

const Logo = styled.img`
	width: 80px;
`

const NavMenu = styled.div`
	display: flex;
	align-items: center;
	flex: 1;
	margin-left: 20px;
	transition: 1s ease-in;
	a{
		display: flex;
		align-items: center;
		padding: 0 12px;
		cursor: pointer;
		img{
			height: 20px;
		}
		span{
			font-size: 13px;
			letter-spaceing: 1.42px;
			position: relative;

			&:after{
				content: "";
				height: 2px;
				background: white;
				position: absolute;
				left: 0;
				bottom: -7px;
				right: 0;
				opacity: 0;
				transform-origin: left center;
				transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
				transform: scaleX(0);

				
			}
		}

		&:hover{
			span:after{
				transform: scaleX(1);
				opacity: 1;
			}
		}
	}

`

const UserImage = styled.img`
	width: 40px;
	height: 40px;
	border-radius: 50%;
	cursor: pointer;
`