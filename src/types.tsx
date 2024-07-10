export type Id = string | number
export type Column = {
	content: any
	id: Id,
	title: string
}

export type Task = {
	id: Id,
	columnId: Id,
	title: string,
	content: string,
}