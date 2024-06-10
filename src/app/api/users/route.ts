export async function GET() {
    const users = [
        {
            name: 'Junior',
            email: 'junior@email.com'
        },
        {
            name: 'John',
            email: 'john@email.com'
        },
        {
            name: 'Maria',
            email: 'maria@email.com'
        }
    ];
    return Response.json({
        data: users });
}