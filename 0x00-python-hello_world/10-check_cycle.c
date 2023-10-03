#include "lists.h"
/**
 * check_cycle - checks if a linked list contains a cycle
 * @list: linked list to check
 *
 * Return: 1 if the list has a cycle, 0 if it doesn't
 */
int check_cycle(listint_t *list)
{
	listint_t *slow_pace = list;
	listint_t *fast_pace = list;

	if (!list)
		return (0);

	while (slow_pace && fast_pace && fast_pace->next)
	{
		slow_pace = slow_pace->next;
		fast_pace = fast_pace->next->next;
		if (slow_pace == fast_pace)
			return (1);
	}

	return (0);
}
