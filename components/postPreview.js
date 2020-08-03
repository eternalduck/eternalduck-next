import Link from 'next/link'
import { useRouter } from 'next/router'

const PostPreview = ({content, slug}) => {
	return (
	<div className="work-item work-item_sites">
		<div className="work-item__inner sites-page__item_inner">
			<div className="work-item__header work-item__header_sites">
				<h4 className="work-item__title">
				{/* <Link as={`/work/sites/${slug}`} href="/work/sites/[slug]">
					<a className="hover:underline">{content.title}</a>
				</Link> */}
					<a href={content.slug}>
						{content.title}
					</a>
				</h4>
			</div>
			<div className="work-item__img-wrap work-item__img-wrap_sites">
				<a href={content.slug}>
					<img src={content.imgThumb} className="work-item__img" alt=""/>
				</a>
			</div>
			<div className="work-item__footer">
				<span className="work-item__keywords">
					{content.keywords}
				</span>
			</div>
		</div>
	</div>
	
	)
}

export default PostPreview