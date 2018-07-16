import * as Hexo from 'hexo';

import * as path from "path";
import * as os from "os";

const blogsPath = path.join(os.homedir(), 'hextron');


const hexo = new Hexo('/Users/renyufeng/Documents/hexo/blog', {debug: false});

function init() {
	hexo.init().then(function () {
		load()
	});
}

function generate() {
	hexo.call('generate', {}).then(function () {

	});
}

function launchServer() {
	hexo.call('server', {}).then(function () {
		// win.loadURL('http://localhost:4000/');
		//return hexo.exit();
	});
}

function getLocals() {
	console.log(hexo.locals.toObject());
}

function getPosts() {
	const localPosts: LocalPosts = hexo.locals.get('posts');
	console.log('文章数量', localPosts.length);

	localPosts.data.forEach((post: Document, index: number) => {
		console.log(`第${index}篇文章内容`, post.title);
	});
}

function load() {
	hexo.load().then(function () {
		getLocals()
	});
}

interface LocalPosts {
	data: Array<Document>
	length: number
}

interface Document {
	__post: boolean
	_content: string
	_id: string
	asset_dir: string
	canonical_path: string
	categories: { data: Array<any>, length: number }
	comments: boolean
	content: string
	date: string
	excerpt: string
	full_source: string
	lang: string
	layout: string
	link: string
	more: string
	path: string
	permalink: string
	photos: Array<any>
	published: boolean
	raw: string
	site: { data: {} }
	slug: string
	source: string
	tags: { data: Array<any>, length: number }
	title: string
	updated: string
}


init();
