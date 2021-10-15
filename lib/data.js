import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), '_content');

export function getAllPosts() {
    const allPosts = fs.readdirSync(contentDirectory);

    return allPosts.map((fileName) => {
        const slug = fileName.replace('.md', '');
        const fileContents = fs.readFileSync(
        path.join(contentDirectory, fileName),
        'utf8'
        );
        const { data, content } = matter(fileContents);

        return {
        data,
        content,
        slug,
        };
    });
}

// export const blogPosts = [
//     {
//         title: 'My First Post',
//         slug: 'first',
//         date: new Date().toISOString(),
//         content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc mattis enim ut tellus elementum sagittis vitae. Dignissim sodales ut eu sem. Vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae. Ipsum a arcu cursus vitae congue mauris rhoncus aenean vel. Phasellus vestibulum lorem sed risus ultricies. Tortor at auctor urna nunc. Volutpat odio facilisis mauris sit. Volutpat sed cras ornare arcu dui vivamus arcu. Neque volutpat ac tincidunt vitae semper quis. Varius duis at consectetur lorem.'
//     },
//     {
//         title: 'My Second Post',
//         slug: 'second',
//         date: new Date().toISOString(),
//         content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc mattis enim ut tellus elementum sagittis vitae. Dignissim sodales ut eu sem. Vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae. Ipsum a arcu cursus vitae congue mauris rhoncus aenean vel. Phasellus vestibulum lorem sed risus ultricies. Tortor at auctor urna nunc. Volutpat odio facilisis mauris sit. Volutpat sed cras ornare arcu dui vivamus arcu. Neque volutpat ac tincidunt vitae semper quis. Varius duis at consectetur lorem.'
//     },
//     {
//         title: 'My Third Post',
//         slug: 'third',
//         date: new Date().toISOString(),
//         content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc mattis enim ut tellus elementum sagittis vitae. Dignissim sodales ut eu sem. Vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae. Ipsum a arcu cursus vitae congue mauris rhoncus aenean vel. Phasellus vestibulum lorem sed risus ultricies. Tortor at auctor urna nunc. Volutpat odio facilisis mauris sit. Volutpat sed cras ornare arcu dui vivamus arcu. Neque volutpat ac tincidunt vitae semper quis. Varius duis at consectetur lorem.'
//     }
// ]