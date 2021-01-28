import s from './style.module.css';

const Layout = (props) => {
	const background = {backgroundImage: props.urlBg ? `url(${props.urlBg})`:null, backgroundColor: props.colorBg} ;
	return (
			<section className={s.root} id={props.id} style={background}>
				<div className={s.wrapper}>
					<article>
						<div className={s.title}>
							<h3>{props.title}</h3>
							<span className={s.separator}></span>
						</div>
						<div className={`${s.desc} ${s.full}`}>
							<p>{props.descr}</p>
						</div>
					</article>
				</div>
			</section>
			
	)
}

export default Layout;