# GitHub Repositories Viewer

This simple web application allows users to search for GitHub repositories by username and view them. It also includes pagination functionality, allowing users to specify the number of repositories displayed per page.

## Features

- Search GitHub repositories by username.
- View repositories with and without pagination.
- Choose the number of repositories per page.
- Loading indicators provide feedback during API calls.

## Usage

1. Open the `index.html` file in your web browser.

2. Search for Repositories:
    - Enter a GitHub username in the input field.
    - Click the "Search" button.

3. Search with Pagination:
    - Enter a GitHub username in the pagination section.
    - Select the number of repositories per page using the dropdown.
    - Click the "Search" button.

4. View Repositories:
    - Repositories will be displayed in a responsive card layout.
    - Click on "View Repository" to open the GitHub repository page.

## API

This application uses the GitHub REST API to fetch repositories. Ensure that you have a stable internet connection for proper functionality.

## Additional Notes

- Pagination is implemented on the client side; for optimal performance and scalability, consider implementing server-side pagination on your server.
- Loading indicators provide feedback during API calls to enhance user experience.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
