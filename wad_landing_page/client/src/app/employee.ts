export interface Employee {
    name: String,
    email: String,
    level: 'president' | 'vice president' | 'secretary' | 'vp of outreach' | 'architect' | 'product manager' | 'member',
    _id?: String
}
