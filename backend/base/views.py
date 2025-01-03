from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
import requests

class SearchTVShows(APIView):
    def get(self, request):
        query = request.query_params.get('query', '')
        if not query:
            return Response({"error": "Query parameter 'query' is required."}, status=status.HTTP_400_BAD_REQUEST)

        url = f"https://api.tvmaze.com/search/shows?q={query}"
        response = requests.get(url)

        if response.status_code == 200:
            shows = [
                {
                    "id": show["show"]["id"],
                    "name": show["show"]["name"],
                    "genres": show["show"]["genres"],
                    "rating": show["show"]["rating"].get("average"),
                    "image": show["show"]["image"]["medium"] if show["show"]["image"] else None,
                }
                for show in response.json()
            ]
            return Response(shows, status=status.HTTP_200_OK)

        return Response({"error": "Failed to fetch data from TVmaze."}, status=response.status_code)

class GetEpisodes(APIView):
    def get(self, request, show_id):
        url = f"https://api.tvmaze.com/shows/{show_id}/episodes"
        response = requests.get(url)

        if response.status_code == 200:
            episodes = [
                {
                    "id": episode["id"],
                    "name": episode["name"],
                    "season": episode["season"],
                    "number": episode["number"],
                    "airdate": episode["airdate"],
                    "runtime": episode["runtime"],
                    "summary": episode["summary"],
                }
                for episode in response.json()
            ]
            return Response(episodes, status=status.HTTP_200_OK)

        return Response({"error": "Failed to fetch episodes."}, status=response.status_code)
