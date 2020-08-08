import styled from "styled-components"

// create go back function for link
// onClick="javascript:history.go(-1)
export default function CustomPage404() {
  return(
		<Page404>
			<Page404txt>
				<h1>not found</h1><br/>
				<p>A fatal exception 0E has occured at 0x000000FF: 42954C6A<br/>the current page will be terminated.</p>
				<p>* Press any <a href="/">link</a> to go to another page.<br/>
				* Press CTRL+ALT+DELETE again to restart your computer.<br/>
				You will lose any unsaved information in all applications.
				</p>
				<p>Press any <a href="/">link</a> to continue.</p>
			</Page404txt>
		</Page404>
  )
}

const Page404  = styled.div`
	background: navy;
	width: 100%;
	height: 100%;
	position: absolute;
	display: flex;
	align-items: center;
	align-content: center;

`;
const Page404txt  = styled.div`
	text-align: center;
	color: #fff;
	font: 17px/1.3 "Courier New", Courier, monospace;
	line-height: 1.5;
	flex: 0 0 80%;
	max-width: 600px;
	margin: 0 auto;
	& h1 {
		display: inline-block;
		background: #eeefee;
		color: navy;
		font-size: 20px;
		padding: 0 10px;
		margin-bottom: 10px;
	}
	& p {
		text-align: left;
		margin: 0 0 15px;
		&:last-child {
			margin-top: 30px;
			text-align: center;
		}
	}
	& a {
		color: #fff;
		border-bottom: 1px solid;
		cursor: pointer;
		text-decoration: none;
		&:hover {
			border-bottom: 1px solid transparent;
		}
	}

`;
