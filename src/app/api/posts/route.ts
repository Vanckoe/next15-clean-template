export const dynamic = 'force-static';

export async function GET() {
    const data = [
        {
            id: '1',
            title: 'Blog post 1',
            content:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus, corrupti.',
        },
        {
            id: '1',
            title: 'Blog post 1',
            content:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus, corrupti.',
        },
        {
            id: '1',
            title: 'Blog post 1',
            content:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus, corrupti.',
        },
    ];

    return Response.json(data);
}
